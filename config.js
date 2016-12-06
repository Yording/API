module.exports = {
	secret: 'Api-wedevjs',
	port: Number(process.env.PORT || 3000),
	db: process.env.MONGODB || 'mongodb://wedevjs:wedevjs99@ds047166.mlab.com:47166/portfolio'
};