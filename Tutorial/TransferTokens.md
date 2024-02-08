# TransferTokensForm

Vamos a usar el componente TextInput.

```jsx
	<TextInput type="text" placeholder="To" onChange={handlerToInputChange} />
        <TextInput type="number" placeholder="Amount" onChange={handlerAmountInputChange} />
```
Usamos useState para cambiar los datos que vamos dando en el formulario.

```jsx
export default function TransferTokensForm() {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
}

```
Se usa la función useContractWrite y recomienda tambien usar usePrepareContractWrite.
la segunda nos devuelve una función que se pasa a la primera:
```jsx
 const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: blockmakerTokenABI,
    functionName: "transfer",
    args: [to, BigInt(amount * 10 ** 18)],
  });

  '''

## Nota: el apartado de functioName que se ha visto en algun otro contrato se obtiene de las funcionesd que hay en el copntrato y que se pueden ver en la web del contrato [https://sepolia.etherscan.io/address/0xA529Dfd9CB8ea733613021999B2d2D55DD376528#writeContract

](url) donde hay tres pestañas seguidas: Code ... Read Contract ... WriteContract en Read y Write salen las funciones que se pueden usar. En este caso transfer "functionName: "transfer" ".

Al ver la función trans en la web vemos que nos pide una diracción y un valor el cual debemos poner y lo ponemos de la sighuiente forma:

Donde la parte de amount la ponemos como BigInt(amount * 10 ** 18) y lo multiplicamos por 10**18 para ver ether en vez de wei, BigInt es para dar un formato.

```
args: [to, BigInt(amount * 10 ** 18)],
```

Con lo uqe tenemos de usePrepareContractWrite pasamos a useWriteContract donde le pasamos config de usePrepareContractWrite.

```jsx
const { data: writeData, write } = useWriteContract(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: writeData?.hash,
  });
```
### useWaitForTransaction({ hash: writeData?.hash, }) no dice que esta pasando (is Loading, IsSucces,isError).
Los resultados se muestran de esta forma:
```
useEffect(() => {
    if (isTransactionSuccess) {
      setTo("");
      setAmount("");
      console.log("Transacción Completada!");
    }
    if (isTransactionError) {
      console.log("Transacción Fallida!");
    }
  }, [isTransactionSuccess, isTransactionError]);
```


Ademas ponemos el boton de escribir la transferencia:

```
	<Button
          disabled={!write || isTransactionLoading}
          onClick={() => write?.()}
          isLoading={isTransactionLoading}
        >
```
## Nota: El ? se pone por si el valor es indefinido o nulo evita que se rompa la aplicación.

## UseEffect:

Tenemos un useEffect el cual nos va a servir para limpiar el formulario y de esta forma porder hacer otra transacción.

```
useEfect (() => {}, [] 
```
En este caso al no poner nada entre [] solo se ejecuata cuando se inicia el componente. 

Pero no es nuestro caso, nosotros queremos que el formulario se quede limpio cuando se realice la transacción (isTransactionSucces) o si la transacción ha dado error (is TransactionError).

```

	useEffect(() => { }
 	 }, [isTransactionSuccess, isTransactionError]); 

```

Lo que indoco aquí es que cuando se de isTransactionSuccess o isTransactionError se ejecute el código que podré entre { }, quedando de la siguinete forma:

```jsx
 useEffect(() => {
    if (isTransactionSuccess) {
      setTo("");
      setAmount("");
      console.log("Transacción Completada!");
    }
    if (isTransactionError) {
      console.log("Transacción Fallida!");
    }
  }, [isTransactionSuccess, isTransactionError]);
```
Indico que si se cumple la transacción ponga los valores setTo y setAmount en blanco:

```
if (isTransactionSuccess) {
      setTo("");
      setAmount("");
      console.log("Transacción Completada!");
    }
```
Si la transaccion da error muestro transacción fallida.

```
if (isTransactionError) {
      console.log("Transacción Fallida!");
    }
```

## Resumen

- Con el hook de wagmi usePrepareContractWrite, nos permite preparar todos los datos del contrato para poder trabajar con ellos

