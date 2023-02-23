import { Media, Project } from '@/projects';
import { Avatar, Tooltip } from '@mui/material';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RenderText({
  identifier,
  text,
  className,
}: {
  identifier: string;
  text: string[];
  className?: string;
}) {
  return (
    <article className={className}>
      {text.map((paragraph, i) => {
        const bulletPoint = paragraph.match(/^\s*-(.*)$/);
        if (bulletPoint) {
          return (
            <ul key={`paragraph-${identifier}-${i}`} className="list-disc">
              <li className="ml-3">{bulletPoint[1]}</li>
            </ul>
          );
        }
        const questionAndAnswer = paragraph.match(/^\s*\[(.*)\]\{(.*)\}$/);
        if (questionAndAnswer) {
          return (
            <ul key={`paragraph-${identifier}-${i}`} className="list-disc my-1">
              <li className="ml-3 font-bold">{questionAndAnswer[1]}</li>
              <p className="ml-3">{questionAndAnswer[2]}</p>
            </ul>
          );
        }
        return (
          <p key={`paragraph-${identifier}-${i}`} className="py-1 min-h-[1rem]">
            {paragraph}
          </p>
        );
      })}
    </article>
  );
}

function RenderMedia({ media }: { media: Media }) {
  if (media.isVideo)
    return (
      <video
        width="100%"
        height="auto"
        poster={media.poster}
        muted
        autoPlay
        controls
        loop
        className="rounded-lg"
      >
        <source src={media.source.url} type={media.source.type} />
        {media.fallback && (
          <source src={media.fallback.url} type={media.fallback.type} />
        )}
      </video>
    );
  return <img src={media.source} className="rounded-lg" />;
}

export default function ProjectContent({ data }: { data: Project }) {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-4xl px-3 pt-10 sm:pt-5 text-center text-white">
        {data.title}
      </h1>
      <div className="max-w-screen-lg mx-auto p-3">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          loop
          navigation={true}
          modules={[Autoplay, Keyboard, Pagination, Navigation]}
        >
          {data.media.map((media) => {
            return (
              <SwiperSlide
                key={media.isVideo ? media.source.url : media.source}
                data-swiper-autoplay={media.isVideo ? '120000' : undefined}
              >
                <RenderMedia media={media} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-3">
          <div className="flex">
            {data.contributors.map((member) => {
              return (
                <a
                  href={member.link}
                  key={member.link}
                  target="_blank"
                  rel="noreferrer"
                  className="first:ml-0 -ml-2 flex items-center"
                >
                  <Tooltip title={member.name}>
                    <Avatar src={member.image} />
                  </Tooltip>
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-zinc-900 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-base sm:text-lg inline-flex items-center gap-2"
              >
                <BsGithub />
                View Code
              </a>
            )}
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-indigo-500 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-base sm:text-lg inline-flex items-center gap-2"
              >
                <HiOutlineExternalLink />
                View Project
              </a>
            )}
          </div>
        </div>
        <RenderText
          identifier="description"
          text={data.description}
          className="text-gray-300 text-justify mt-3"
        />
        {data.problem.length > 0 && (
          <>
            <h3 className="text-xl text-white mt-5 mb-2">The Problem</h3>
            <RenderText
              identifier="problem"
              text={data.problem}
              className="text-gray-300"
            />
          </>
        )}
        {data.challenges.length > 0 && (
          <>
            <h3 className="text-xl text-white mt-5 mb-2">
              Challenges during the Project
            </h3>
            <RenderText
              identifier="challenges"
              text={data.challenges}
              className="text-gray-300"
            />
          </>
        )}
        {data.techStack.length > 0 && (
          <>
            <h3 className="text-xl text-white mt-5 mb-2">Tech Stack</h3>
            <RenderText
              identifier="techStack"
              text={data.techStack}
              className="text-gray-300"
            />
          </>
        )}
      </div>
    </div>
  );
}
