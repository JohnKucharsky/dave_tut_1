import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import { User } from "../../../types";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return (
    <section>
      <h2>
        <Link href={"/"}>Home</Link>
      </h2>
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>

          <br />
        </>
      ))}
    </section>
  );
}
