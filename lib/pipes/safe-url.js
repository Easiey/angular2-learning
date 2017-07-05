import {Pipe, Sanitizer, Inject} from '@angular/core';

@Pipe({
    name: 'safeUrl'
})
export class SafeUrlPipe {
    constructor(@Inject(Sanitizer) sanitizer) {
        this.sanitizer = sanitizer;
    }

    transform(value) {
        return this.sanitizer.bypassSecurityTrustUrl(value)
    }
}
