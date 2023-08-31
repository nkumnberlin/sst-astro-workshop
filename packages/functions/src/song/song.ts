import { ApiHandler, usePathParam } from "sst/node/api";
import { Table } from "sst/node/table";
import { DynamoDB } from "aws-sdk";
import { Song } from "../types";

const dynamoDb = new DynamoDB.DocumentClient();

const getSongWithTitle = async (title: string) => {
    const getParams = {
        // Get the table name from the environment variable
        TableName: Table.Bangerz.tableName,
        // Get the row where the counter is called "clicks"
        Key: {
            title,
        },
    };
    const results = await dynamoDb.get(getParams).promise();

    if (results.Item) {
        return results.Item as Song;
    }
    return null;
};
export const song = ApiHandler(async (evt) => {
    const title = usePathParam("id");
    if(!title){
        return {
            statusCode: 404,
            body: `Song ${title} couldn't be found.`,
        };
    }
    const foundSong = await getSongWithTitle(title);
    if(!foundSong){
        return {
            statusCode: 404,
            body: `Song ${title} couldn't be found.`,
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(foundSong),
    };
});
