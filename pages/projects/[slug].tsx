import ProjectContent from '@/components/projectContent';
import { getPorjectBySlug, Project } from '@/projects';
import { GetServerSidePropsContext } from 'next';

export default function ProjectPage({ data }: { data: Project }) {
  return <ProjectContent data={data} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query.slug;
  if (typeof slug != 'string')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  const project = getPorjectBySlug(slug);
  return {
    props: {
      data: JSON.parse(JSON.stringify(project)),
    },
  };
}
