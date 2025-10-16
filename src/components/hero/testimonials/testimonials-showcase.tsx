/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/registry/magicui/marquee"
import { cn } from "@/lib/utils"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        // 🔹 Increased width & height
        "relative h-auto lg:w-[300px] cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.02] hover:bg-gray-950/[.08]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.20]",
        "transition-transform duration-300 hover:scale-[1.03]" // optional smooth hover effect
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed dark:text-gray-200">
        {body}
      </blockquote>
    </figure>
  )
}


export function TestimonialsShowcase() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}
