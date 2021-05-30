import { css } from '@emotion/react'

const styles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`

const UserContainer = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default UserContainer
