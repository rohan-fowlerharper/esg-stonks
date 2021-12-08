import React, { useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { IconButton } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { addFavouriteStonk, removeFavouriteStonk } from '../redux/actions/favouriteStonks'
import { useDispatch, useSelector } from 'react-redux'

function FavouriteStonkButton ({ stonkId, ...rest }) {
  const { getAccessTokenSilently } = useAuth0()
  const [isLoading, setIsLoading] = React.useState(false)
  const isFavourite = useSelector(state => state.favouriteStonks.includes(stonkId))
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(false)
  }, [isFavourite])

  async function handleClick () {
    setIsLoading(true)
    const token = await getAccessTokenSilently()
    if (isFavourite) {
      dispatch(removeFavouriteStonk(stonkId, token))
    } else {
      dispatch(addFavouriteStonk(stonkId, token))
    }
  }

  const sharedProps = {
    colorScheme: 'pink',
    role: 'toggle-favourite-stonk',
    rounded: 'full',
    size: 'xs',
    onClick: handleClick,
    ...rest
  }

  return (
    <>
      {isLoading ? (
        <IconButton isLoading variant='outline' {...sharedProps} />
      ) : isFavourite ? (
        <IconButton
          icon={<CheckIcon />}
          {...sharedProps}
        />
      ) : (
        <IconButton
          variant='outline'
          icon={<AiOutlineStar />}
          {...sharedProps}
        />)}
    </>
  )
}

export default FavouriteStonkButton
