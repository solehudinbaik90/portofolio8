export default function IndexPage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
}