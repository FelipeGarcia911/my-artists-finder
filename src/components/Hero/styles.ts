import { styled } from '@/styles/theme'

export const Container = styled.div<{ bgImage: string }>`
  align-items: center;
  background-image: url(${(props: any) => props.bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: center;
  min-height: 15rem;
  width: 100%;
`
