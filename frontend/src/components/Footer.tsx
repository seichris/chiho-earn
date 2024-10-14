import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Twitter } from "lucide-react";

const sites = [
  {
    link: "/",
    title: "Home",
  },

  {
    link: "https://blog.chiho.ai",
    title: "Blog",
  },
];

const information = [
  {
    link: "https://twitter.com/getchiho",
    title: "Twitter",
  },
  {
    link: "https://t.me/chihoai",
    title: "Telegram",
  },
];

export function Footer() {
  return (
    <div className="container border-t border-gray-200 mt-60 mb-8">
      <div className="grid gap-8 md:grid-cols-2 mt-8 mb-16">
        <div className="max-w-md">
          <h4 className="mb-6 font-bold">Chiho</h4>
          <div className="flex items-center mb-8 text-sm">
            <span>Built and dogfooded by Web3 Sales veterans</span>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mt-12 md:mt-0">
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-md font-bold">Site</h4>
            <div className="grid gap-4">
              {sites.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-left text-gray-600 dark:text-gray-300 text-sm text-semibold hover:text-gray-800 dark:hover:text-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-md font-bold">Contact us</h4>
            <div className="grid gap-4">
              {information.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-left text-gray-600 dark:text-gray-300 text-sm text-semibold hover:text-gray-800 dark:hover:text-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-sm text-gray-600 dark:text-gray-500">
        <p className="caption title">Chiho.ai © 2024</p>
        <div className="caption">
          <Link
            href="/terms"
            className="text-left  hover:text-gray-800 dark:hover:text-gray-200"
          >
            Terms
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy"
            className="text-left  hover:text-gray-800 dark:hover:text-gray-200"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}

type FooterSmallProps = {
  messageBot?: boolean;
  messagePromotion?: boolean;
};

export function FooterSmall({messageBot = false, messagePromotion = false}: FooterSmallProps) {
  return (
    <div className="mt-auto px-0 md:px-8 my-4">
      <div className="flex flex-row justify-between text-sm px-2 sm:px-0">
        <div className="flex flex-row space-x-4">
          <p className="text-muted-foreground/50">Chiho.ai © 2024</p>
          <div className="text-primary flex items-center space-x-4">
            <a
              href="https://twitter.com/getchiho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4 fill-primary" />
            </a>
            <a
              href="https://t.me/chihoai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="164"
                height="135"
                viewBox="0 0 164 135"
                fill="none"
                className="h-4 w-4 fill-primary"
              >
                <path
                  d="M11.6407 59.4087L11.6559 59.4026L11.6709 59.3961C55.3926 40.224 84.6139 27.8342 99.3359 21.7585L99.3383 21.7575C120.152 13.1045 132.701 8.0272 140.744 5.0838C148.782 2.14231 152.224 1.37049 154.86 1.25735C155.391 1.25873 156.302 1.31388 157.288 1.52702C158.286 1.74293 159.291 2.10593 160.064 2.6788C161.178 3.61891 161.587 4.95617 161.809 6.06529C162.026 7.15021 162.25 9.61786 162.029 11.6044L162.028 11.6163C159.694 35.1858 150.114 92.9048 144.972 119.318L144.971 119.325C142.892 130.41 138.855 133.55 135.566 133.946C131.538 134.268 127.896 132.916 124.154 130.745C122.279 129.657 120.401 128.377 118.447 127.018C118.157 126.817 117.866 126.613 117.572 126.409C115.899 125.242 114.166 124.034 112.36 122.879C106.279 118.862 101.379 115.529 96.5761 112.263C91.1018 108.54 85.7541 104.904 78.9293 100.436C75.3012 98.0174 73.3054 95.9557 72.3796 94.1594C71.4902 92.4336 71.5542 90.8886 72.2489 89.3097C72.9733 87.6634 74.3848 85.9838 76.2282 84.1186C77.056 83.281 77.9506 82.4254 78.8873 81.5295C78.9847 81.4364 79.0826 81.3428 79.1809 81.2487C80.22 80.2543 81.302 79.2131 82.3679 78.1176L82.3815 78.1036L82.3945 78.0892C82.8811 77.5485 85.6316 74.9823 89.5879 71.306C90.0051 70.9183 90.435 70.5189 90.8762 70.109C94.5834 66.665 99.0874 62.4808 103.557 58.273C108.556 53.5658 113.52 48.8218 117.28 45.0467C119.159 43.1607 120.748 41.5059 121.893 40.2136C122.465 39.5688 122.939 39.0003 123.286 38.5302C123.459 38.2955 123.611 38.0719 123.73 37.866C123.84 37.6763 123.961 37.4348 124.016 37.1777L124.039 37.0741V36.9682C124.039 36.9611 124.04 36.9402 124.042 36.9078C124.053 36.7176 124.088 36.132 124.032 35.653C123.958 35.0269 123.717 34.181 122.937 33.5961C121.589 32.5848 119.969 32.9638 119.08 33.1859C118.938 33.2155 118.81 33.2654 118.724 33.3014C118.61 33.3488 118.484 33.4086 118.352 33.4758C118.086 33.6109 117.749 33.798 117.347 34.032C116.541 34.5013 115.432 35.1841 114.024 36.0758C111.205 37.8607 107.157 40.5032 101.881 43.9968C91.3251 50.985 75.8308 61.3925 55.3712 75.1881L55.3711 75.1881L55.361 75.1951C49.3898 79.329 44.2078 81.0968 39.5624 81.0968C37.0104 81.0968 33.2005 80.367 28.9967 79.2868C24.8193 78.2135 20.3426 76.8184 16.4959 75.5362L16.4888 75.5339C15.3509 75.1641 14.2512 74.8179 13.1972 74.4861C9.84842 73.4318 6.96135 72.5229 4.77867 71.464C3.35546 70.7735 2.3462 70.0695 1.7323 69.3119C1.15545 68.5999 0.903487 67.8145 1.03338 66.8222C1.20595 65.9224 2.00174 64.7822 3.79418 63.4659C5.56958 62.1621 8.17255 60.796 11.6407 59.4087Z"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
        {messageBot && (
        <p className="text-muted-foreground items-center">
          <span className="lg:inline hidden">Add notes and receive notifications with our Telegram bot:</span>
          <a
            href="https://t.me/chihoaibot"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-1"
          >
            @chihoaibot
          </a>
        </p>
        )}
        {messagePromotion && (
        <p className="text-muted-foreground/50 flex items-center">
          *Get $5 worth of AI credits to be used to query Chiho.ai
        </p>
        )}
        <div className="text-muted-foreground/50">
          <Link
            href="/terms"
            className="text-left hover:text-muted-foreground"
          >
            Terms
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy"
            className="text-left hover:text-muted-foreground"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
