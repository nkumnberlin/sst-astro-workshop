import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { DynamoDB } from "aws-sdk";
import { initialData } from "./data";

const dynamoDb = new DynamoDB.DocumentClient();

const initializeData = async () => {
    const batchParams = {
        RequestItems: {
            [Table.Bangerz.tableName]:  initialData.map(song => ({
                PutRequest: {
                    Item: song
                }
            }))
        }
    };
    return dynamoDb.batchWrite(batchParams).promise();
};
export const init = ApiHandler(async (evt) => {
    await initializeData();
    return {
        statusCode: 200,
    };
});
