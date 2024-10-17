import {useState} from 'react'

import {
  UnlockContainer,
  Image,
  ImageDescription,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickButton = () => {
    setLock(prevState => !prevState)
  }

  const img = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altImg = isLocked ? 'lock' : 'unlock'
  const description = isLocked ? 'Locked' : 'Unlocked'
  const button = isLocked ? 'Unlock' : 'lock'

  return (
    <UnlockContainer>
      <Image src={img} alt={altImg} />
      <ImageDescription>Your Device is {description}</ImageDescription>
      <Button type="button" onClick={onClickButton}>
        {button}
      </Button>
    </UnlockContainer>
  )
}

export default Unlock
