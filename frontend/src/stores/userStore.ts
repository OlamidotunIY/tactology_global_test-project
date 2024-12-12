import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../gql/graphql";

interface UserState {
  id: number | undefined;
  fullname: string;
  email: string;
  updateFullname: (name: string) => void;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
    persist(
      (set) => ({
        id: undefined,
        fullname: "",
        email: "",

        updateFullname: (name: string) => set({ fullname: name }),
        setUser: (user) =>
          set({
            id: user.id || undefined,
            fullname: user.fullname as string,
            email: user.email as string,
          }),
      }),
      {
        name: "user-store",
      }
    )
  )