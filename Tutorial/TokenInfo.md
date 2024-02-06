# TokenInfo


La actualñizacion cambia de use Token a useReadContracts en el podemos encontrar toda la información del contrato.

```jsx
import { Title } from "./ui";
import { useReadContracts } from "wagmi";
import PropTypes from "prop-types";
function TokenInfoItem({ label, value }) {
  return (
    <li className="flex gap-2 bg-gray-100 text-zinc-600 p-2 rounded-md text-sm">
      <span className="font-bold capitalize">{label}:</span>
      <p>{value}</p>
    </li>
  );
}

TokenInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function TokenInfo() {
  const { data } = useReadContracts({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    watch: true,
  });

  return (
    <div className="bg-white p-4 border shadow rounded-md">
      <Title>Token Info</Title>
      <ul className="grid gap-4">
        <TokenInfoItem label="name" value={data?.name} />
        <TokenInfoItem label="symbol" value={data?.symbol} />
        <TokenInfoItem label="decimals" value={data?.decimals} />
        <TokenInfoItem
          label="total supply"
          value={data?.totalSupply.formatted}
        />
        <TokenInfoItem label="address" value={data?.address} />
      </ul>
    </div>
  );
}
```

- watch: true se usa para que el codigo esté pendiente de los cambios y los actualice sion necesidad de que nosotros actualicemos la aplicacion.

- Creo un componente TokenInfoItem donde introduzco unas props label y value. y le doy estilo directamente y luego lo usao para los datos de useReadContracts.
	
```jsx

	TokenInfoItem.propTypes = {
  	label: PropTypes.string.isRequired,
  	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	<TokenInfoItem label="name" value={data?.name} />
        <TokenInfoItem label="symbol" value={data?.symbol} />
        <TokenInfoItem label="decimals" value={data?.decimals} />
        <TokenInfoItem
          label="total supply"
          value={data?.totalSupply.formatted}
        />
        <TokenInfoItem label="address" value={data?.address} />


```
