"use server"; // Добавление директивы use server

import { auth } from "@/lib/auth";

export const fetchData = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("Session not available");
  }

  // Логика серверных действий, если необходимо
  // Вернуть данные или выполнить другие серверные действия
};
