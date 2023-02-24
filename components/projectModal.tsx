import { Project } from '@/projects';
import { Dialog, Skeleton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useRouter } from 'next/router';
import {
  forwardRef,
  ReactElement,
  Ref,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import ProjectContent from './projectContent';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectModal() {
  const [data, setData] = useState<null | Project>(null);
  const router = useRouter();

  const isOpen = useMemo(
    () => /\/projects/.test(router.asPath),
    [router.asPath]
  );

  const handleClose = () => {
    router.replace('/', '/', { scroll: false });
    setData(null);
  };

  useEffect(() => {
    if (!isOpen) return setData(null);
    fetch(`/api${router.asPath}`).then((res) =>
      res.json().then((d) => setData(d))
    );
  }, [isOpen]);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      className="mt-8"
      PaperProps={{
        className:
          'rounded-t-lg bg-gradient-to-r from-gray-800 via-zinc-900 to-gray-900',
      }}
    >
      <div className="w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-3xl text-indigo-600 p-3"
        >
          <IoMdClose />
        </button>
        {data ? (
          <ProjectContent data={data} />
        ) : (
          <div className="flex flex-col items-center gap-3 max-w-screen-lg mx-auto p-3 mt-5">
            <Skeleton
              variant="text"
              className="bg-gray-500 w-1/3 max-w-md text-2xl"
            />
            <Skeleton
              variant="rounded"
              className="bg-gray-500 w-full h-auto aspect-video"
            />
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between">
              <div className="flex items-center">
                <Skeleton
                  variant="circular"
                  className="bg-gray-500 w-10 h-10"
                />
                <Skeleton
                  variant="circular"
                  className="bg-gray-500 w-10 h-10 -ml-2"
                />
                <Skeleton
                  variant="circular"
                  className="bg-gray-500 w-10 h-10 -ml-2"
                />
              </div>
              <Skeleton variant="rounded" className="bg-gray-500 w-32 h-10" />
            </div>
            <Skeleton
              variant="text"
              width="100%"
              className="bg-gray-500 text-base"
            />
            <Skeleton
              variant="text"
              width="100%"
              className="bg-gray-500 text-base"
            />
            <Skeleton
              variant="text"
              width="40%"
              className="bg-gray-500 self-start text-base"
            />
          </div>
        )}
      </div>
    </Dialog>
  );
}
