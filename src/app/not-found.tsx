import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <>
      <div>Not Found</div>
      <p>This page does not exist</p>
      <Link href="/">Go Home</Link>
    </>
  )
}