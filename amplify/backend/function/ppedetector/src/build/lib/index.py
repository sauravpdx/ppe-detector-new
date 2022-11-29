import json
import boto3

def detect_labels(photo = "test.png", bucket="test-rekognit"):

    client=boto3.client('rekognition')

    response = client.detect_protective_equipment(Image={'S3Object':{'Bucket':bucket,'Name':photo}})
    return response

def handler(event, context):
    
  print('received event:')
  print(event)
  resp = detect_labels()

  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': resp
  }