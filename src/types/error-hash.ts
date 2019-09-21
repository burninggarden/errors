import ErrorType    from 'enums/error-type';
import {StatusCode} from '@burninggarden/http';

type SerializableValue = string | number | boolean | undefined | null;

interface SerializableObject {
	[key: string]: SerializableValue;
}

export default interface ErrorHash {
	type          : ErrorType;
	message       : string;
	statusCode    : StatusCode;
	[key: string] : SerializableValue | SerializableObject | SerializableValue[];
}
