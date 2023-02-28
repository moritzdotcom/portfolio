import ProjectContent from '@/components/projectContent';
import { getProjectBySlug, Project, validSlugs } from '@/projects';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = validSlugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug;
  if (typeof slug != 'string')
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  const project = getProjectBySlug(slug);
  return {
    props: {
      data: JSON.parse(JSON.stringify(project)),
    },
  };
}
