import { ApiHandler } from "sst/node/api";
import { Table } from "sst/node/table";
import { Song } from "../types";
import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

const getSongs = async (): Promise<Song[]> => {
    const results = await dynamoDb.scan({
        // Get the table name from the environment variable
        TableName: Table.Bangerz.tableName
    }).promise();

    if (results.Items) {
        return results.Items as Song[];
    }
    return [];
};
export const songs = ApiHandler(async (_evt) => {
    const songs = await getSongs();
    return {
        statusCode: 200,
        body: JSON.stringify(songs)
    };
});
