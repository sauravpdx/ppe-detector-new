export type AmplifyDependentResourcesAttributes = {
    "function": {
        "ppedetector": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "ppedetector68af830f": {
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
        "ppedetector": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "ppedetector": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}