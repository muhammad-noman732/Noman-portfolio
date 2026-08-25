import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex items-start justify-between gap-4 border-b border-border py-5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <Link href={`/blog/${post.slug}`} className="block">
          <h2 className="font-medium text-foreground transition-colors duration-150 hover:text-accent">
            {post.title}
          </h2>
        </Link>
        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <time
            dateTime={post.date}
            className="tabular-nums"
          >
            {formatDate(post.date)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed tracking-wide text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-2">
              <span aria-hidden="true">·</span>
              <Link
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-full border border-border px-2 py-0.5 text-foreground transition-colors hover:border-foreground/50 hover:bg-muted"
              >
                {tag}
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* Arrow — slides in + fades on hover */}
      <div
        aria-hidden="true"
        className="mt-0.5 shrink-0 translate-x-0 text-muted-foreground opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-100"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </article>
  );
}
