# TokenBalance

- Creamos un archivo TokenBalance.jsx en components ya que no es un archivo genérico y no lo usaremos arias veces.
- Ademas creamos dentro de components el archivo index.fs para exportar todos lo componentas que creemos en la carpeta.
- Lo ponemos en home.
- Necesitaremos el nombre del contrato, por lo que lo introduciremos en elñ archivo .env, al tener información sensible.


La idea es obtener el balance del contrato por lo que usaremos wagmi para obtener esos datos con los hooks que nos proporciona.

	- En esta caso useBalance.
	
```
  const { data, isLoading } = useBalance
```
	De todos los datos que nos da useBalance, nos quedamos con data e isLoading, en el manual de wagmi nos indica †odo lo que nos devuelve.

```
const tokenBalance = data?.formatted
```


	Aqui le pedimos que data nos la de formateada para mejor comprension.

De la misma forma con:

```
const { address, isConnected } = useAccount()
```

	POdermos saber si esta conectada la wallet y n o esta pòdemos poner un mensaje de error con el componente error creado con anterioridad:

```
 {isConnected ? (
        <p>
          {tokenBalance} {data?.symbol}
        </p>
      ) : (
        <ErrorInfo message="Conecta tu wallet para ver tu balance de BM" />
      )}
```


