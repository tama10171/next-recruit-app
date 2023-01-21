import { useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<any>(null)

  return {
    user,
    setUser,
  }
}
