import { RoomPage } from '@/components/room/roomPage'

type RoomProps = {
  params: {
    code: string
  }
}

export default function Room({ params: { code } }: RoomProps) {
  return <RoomPage code={code} />
}
