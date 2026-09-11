import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                Image(systemName: "iphone.gen3")
                    .font(.system(size: 64))
                    .foregroundStyle(.tint)
                Text("PMDM")
                    .font(.largeTitle.bold())
                Text("Ready to build.")
                    .foregroundStyle(.secondary)
            }
            .padding()
            .navigationTitle("PMDM")
        }
    }
}

#Preview {
    ContentView()
}
