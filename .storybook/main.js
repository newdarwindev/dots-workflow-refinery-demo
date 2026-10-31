export default { stories:['../src/**/*.stories.jsx'], addons:[], framework:{name:'@storybook/react-vite',options:{}}, viteFinal: async config => ({...config, base:'./'}) };
