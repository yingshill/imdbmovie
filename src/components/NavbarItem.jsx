"use client";
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre");

  const navigationItemActive = 
    genre && genre === param && 
    "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${navigationItemActive}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
