import { css } from '@emotion/react'

const styles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const UserContainer = ({ children }) => {
  return <div css={styles}>{children}</div>
}

export default UserContainer
