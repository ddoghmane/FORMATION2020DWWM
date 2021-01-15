//
//  ContentView.swift
//  Shared
//
//  Created by DOGHMANE on 15/01/2021.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: newprojectDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(newprojectDocument()))
    }
}
