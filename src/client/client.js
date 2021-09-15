const PROTO_PATH = '../customers.proto'
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase:true,
    longs:String,
    enums:String,
    arrays:true
})

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService

const client = new CustomerService(
    'localhost:30001',
    grpc.credentials.createInsecure()
)

module.exports = client