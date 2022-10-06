import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Made Massage</title>
        <meta
          name="description"
          content="At Made Massage we have the right therapy for everyone. Book via
              whatsapp below."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={image1}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              At Made Massage we have the right therapy for everyone. Book via
              whatsapp below.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Please allow 2 hours before booking, the massage will be held at
                your villa.
              </p>
              <Button
                href="https://wa.me/6287861366883"
                variant="primary"
                className="w-full mt-6 text-xl group"
              >
                Click to Book Via Whatsapp
              </Button>
              <p className="text-sm">
                Contact person: Made Phone/Whatsapp +62 878-6136-6883
              </p>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - balinese massage hour 150 k{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - aromatherapy massage hour 170 k{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - hot stone massage hour 170 k.{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - thai massage 1 hour 170 k{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - after sunburn massage 1 hour 150 k
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - traditional facial hour 130{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - body scrub hour 130 k
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - ear candle 110 k{' '}
              </h1>
              <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                - reflexology hour 150 k{' '}
              </h1>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
