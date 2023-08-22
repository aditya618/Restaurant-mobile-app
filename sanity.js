import sanityClient from '@sanity/client';
import ImageUrlBuilder  from '@sanity/image-url';

const client = sanityClient({
    projectId: 'dk3d0ey4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '1'
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export default client;