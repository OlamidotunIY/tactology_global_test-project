import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../gql/graphql";

interface UserState {
  id: string | undefined;
  username: string;
  updateFullname: (name: string) => void;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
    persist(
      (set) => ({
        id: undefined,
        username: "",

        updateFullname: (name: string) => set({ username: name }),
        setUser: (user) =>
          set({
            id: user.id || undefined,
            username: user.username as string,
          }),
      }),
      {
        name: "user-store",
      }
    )
  )