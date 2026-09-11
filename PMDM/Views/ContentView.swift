import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(.systemBackground)
                .ignoresSafeArea()

            Text("PMDM")
                .font(.system(size: 72, weight: .bold, design: .rounded))
                .tracking(4)
                .foregroundStyle(.primary)
                .accessibilityIdentifier("landingTitle")
        }
    }
}

#Preview {
    ContentView()
}
