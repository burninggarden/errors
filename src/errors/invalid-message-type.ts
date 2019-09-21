import ErrorType         from 'enums/error-type';
import {StatusCode}      from '@burninggarden/http';
import InvalidValueError from 'errors/invalid-value';

class InvalidMessageTypeError extends InvalidValueError {
	public getType(): ErrorType {
		return ErrorType.INVALID_MESSAGE_TYPE;
	}

	public getStatusCode(): StatusCode {
		return StatusCode.UNPROCESSABLE_ENTITY;
	}

	protected getLabel(): string {
		return 'message type';
	}
}

export default InvalidMessageTypeError;
