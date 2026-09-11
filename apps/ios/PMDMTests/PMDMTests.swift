import Testing
@testable import PMDM

struct PMDMTests {
    @Test func appModuleLoads() {
        let view = ContentView()
        #expect(String(describing: type(of: view)) == "ContentView")
    }
}
