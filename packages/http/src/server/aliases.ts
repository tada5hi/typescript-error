import {InternalServerError as InternalServerError} from "./500-internal-server-error";
import {NotImplementedError as NotImplemented} from "./501-not-implemented";
import {BadGatewayError as BadGateway} from "./502-bad-gateway";
import {ServiceUnavailableError as ServiceUnavailable} from "./503-service-unavailable";
import {GatewayTimeoutError as GatewayTimeout} from "./504-gateway-timeout";
import {HTTPVersionNotSupportedError as HTTPVersionNotSupported} from "./505-http-version-not-supported";
import {VariantAlsoNegotiatesError as VariantAlsoNegotiates} from "./506-variant-also-negotiates";
import {InsufficientStorageError as InsufficientStorage} from "./507-insufficient-storage";
import {LoopDetectedError as LoopDetected} from "./508-loop-detected";
import {BandwidthLimitExceededError as BandwidthLimitExceeded} from "./509-bandwidth-limit-exceeded";
import {NotExtendedError as NotExtended} from "./510-not-extended";
import {NetworkAuthenticationRequiredError as NetworkAuthenticationRequired} from "./511-network-authentication-required";
export {
	InternalServerError,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,
	BandwidthLimitExceeded,
	NotExtended,
	NetworkAuthenticationRequired
};