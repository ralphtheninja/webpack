it("should generate correct code when pure expressions are in dead branches", () => {
	require("./import-module").test();
	return Promise.all([import("./some-module"), import("./chunk")]);
});
