import ErrorType    from 'enums/error-type';
import BaseError    from 'errors/base';
import {StatusCode} from '@burninggarden/http';

class InvalidValueError extends BaseError {
	private actualValue    : any;
	private expectedValues : any[];

	public constructor(actualValue: any, expectedValues: any[]) {
		super();

		this.actualValue = actualValue;
		this.expectedValues = expectedValues;
	}

	public getType(): ErrorType {
		return ErrorType.INVALID_VALUE;
	}

	public getStatusCode(): StatusCode {
		return StatusCode.UNPROCESSABLE_ENTITY;
	}

	public getMessage(): string {
		return this.trimMessage(`
			Received unexpected value: ${this.getActualValue()}
			(expected one of ${this.getExpectedValues()})
		`);
	}

	protected getLabel(): string {
		return 'value';
	}

	private getActualValue(): any {
		return this.actualValue;
	}

	private getExpectedValues(): any[] {
		return this.expectedValues;
	}
}

export default InvalidValueError;
