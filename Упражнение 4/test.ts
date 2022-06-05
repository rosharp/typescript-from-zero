interface IPayment {
	sum: number,
	from: number,
	to: number
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed'
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type Res = IResponseSuccess | IResponseFailed; 

function isSuccess(res: Res): res is IResponseSuccess {
	if (res.status === PaymentStatus.Success) {
		return true;
	} else {
		 throw new Error(res.data.errorMessage);
	}
}

function getDatabaseId(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId;
	}
}
