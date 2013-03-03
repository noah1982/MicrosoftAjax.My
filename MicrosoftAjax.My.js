/*
 *	Date.prototype
 */
Date.prototype.addYears = function (years) {
    var e = Function._validateParams(arguments, [
        { name: "years", type: Number, integer: true }
    ]);
    if (e) throw e;
    this.setFullYear(this.getFullYear() + years);
    return this;
}
Date.prototype.addMonths = function(months) {
    var e = Function._validateParams(arguments, [
        { name: "months", type: Number, integer: true }
    ]);
    if (e) throw e;
    var totalMonths = this.getFullYear() * 12 + this.getMonth() + months;
    this.setFullYear(Math.floor(totalMonths / 12), totalMonths % 12);
    return this;
};
Date.prototype.addDays = function (days) {
    var e = Function._validateParams(arguments, [
        { name: "days", type: Number, integer: true}
    ]);
    if (e) throw e;
    return this._addMilliSeconds(days * 24 * 60 * 60 * 1000);
};
Date.prototype.addHours = function (hours) {
    var e = Function._validateParams(arguments, [
        { name: "hours", type: Number, integer: true}
    ]);
    if (e) throw e;
    return this._addMilliSeconds(hours * 60 * 60 * 1000);
};
Date.prototype.addMinutes = function (minutes) {
    var e = Function._validateParams(arguments, [
        { name: "minutes", type: Number, integer: true }
    ]);
    if (e) throw e;
    return this._addMilliSeconds(minutes * 60 * 1000);
}
Date.prototype.addSeconds = function (seconds) {
    var e = Function._validateParams(arguments, [
        { name: "minutes", type: Number, integer: true }
    ]);
    if (e) throw e;
    return this._addMilliSeconds(seconds * 1000);
};
Date.prototype.addMilliSeconds = function (milliseconds) {
    var e = Function._validateParams(arguments, [
        { name: "days", type: Number }
    ]);
    if (e) throw e;
    return this._addMilliSeconds(milliseconds);
};
Date.prototype._addMilliSeconds = function (milliseconds) {
    return new Date(milliseconds + this.getTime());
};
Date.prototype.compareTo = function (otherDate) {
    var e = Function._validateParams(arguments, [
        { name: "otherDate", type: Date }
    ]);
    if (e) throw e;
    var milli1 = this.getTime();
    var milli2 = otherDate.getTime();
    if (milli1 > milli2)
        return 1;//大于
    else if (milli1 < milli2)
        return -1;//小于
    else
        return 0;//等于
};
Date.prototype.subtract = function(otherDate) {
    var e = Function._validateParams(arguments, [
        { name: "otherDate", type: Date }
    ]);
    if (e) throw e;
    var tdd = tHH = tmm = tss = tfff = 0;
    var dd = HH = mm = ss = fff = 0;
    var milliseconds = this.getTime() - otherDate.getTime();
    if (milliseconds > 0) {
        tdd = milliseconds / (24 * 60 * 60 * 1000);
        tHH = milliseconds / (60 * 60 * 1000);
        tmm = milliseconds / (60 * 1000);
        tss = milliseconds / 1000;
        tfff = milliseconds;
        dd = Math.floor(tdd);
        var temp = milliseconds % (24 * 60 * 60 * 1000);
        HH = Math.floor(temp / (60 * 60 * 1000));
        temp = temp % (60 * 60 * 1000);
        mm = Math.floor(temp / (60 * 1000));
        temp = temp % (60 * 1000);
        ss = Math.floor(temp / 1000);
        fff = temp % 1000;
    }
    return {
        days: dd,
        hours: HH,
        minutes: mm,
        seconds: ss,
        milliseconds: fff,
        totalDays: tdd,
        totalHours: tHH,
        totalMinutes: tmm,
        totalSeconds: tss,
        totalMilliseconds: tfff
    };
};