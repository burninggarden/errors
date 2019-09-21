import ErrorType    from 'enums/error-type';
import ErrorHash    from 'types/error-hash'
import {StatusCode} from '@burninggarden/http';

abstract class BaseError {
	public toHash(): ErrorHash {
		return {
			type:       this.getType(),
			message:    this.getMessage(),
			statusCode: this.getStatusCode()
		};
	}

	protected trimMessage(message: string): string {
		return message.replace(/\s+/g, ' ').trim();
	}

	public abstract getType(): ErrorType;
	public abstract getMessage(): string;
	public abstract getStatusCode(): StatusCode;
}

export default BaseError;
