
import { UserStatus } from "@/components/UserStatus";

export function ChatHeader () {
  return (
    <header className="header">
      <div className="header__wrapper">
        <UserStatus />
      </div>
    </header>
  )
}
