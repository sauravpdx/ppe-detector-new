export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "ppedetector26c7bbed": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "storage": {
        "s3abf45b25": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "ppedetector": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "pperest": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}