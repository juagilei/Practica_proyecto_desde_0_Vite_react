# Title
Creamos un componente Title el cual nos dará in titulo, en esta caso le pasaremos el título por lo que ponemos un children y de damos las props.
```jsx
import PropTypes from 'prop-types'

export default function Title({ children }) {
  return <h3 className="font-bold text-lg mb-2 w-fit text-slate-700">{children}</h3>
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}
```

