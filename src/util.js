Date.prototype.formatDDMMYYYY = function () {
    return this.getDate() + "/" + (this.getMonth() + 1) + "/" + this.getFullYear();
}