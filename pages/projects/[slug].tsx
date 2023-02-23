import ProjectContent from '@/components/projectContent';
import { getPorjectBySlug, Project } from '@/projects';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

export default function ProjectPage({ data }: { data: Project }) {
  return (
    <>
      <Head>
        <title>Moritz Löchner</title>
        <meta name="description" content={data.title} />
      </Head>
      <ProjectContent data={data} />
    </>
  );
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
