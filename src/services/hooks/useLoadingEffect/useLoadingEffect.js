import { useSelector } from 'react-redux'

import { loaderSelector } from 'containers/App/store/reducers/selectors'

const useLoadingEffect = value => {
  const loaderState = useSelector(loaderSelector)

  const loading = loaderState[value]

  return loading
}

export default useLoadingEffect
