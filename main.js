/**
 * Created by Christopher on 4/12/2016.
 */
$(function() {

    var barA1 = {
        x: ["1. Aerobacter aerogenes", "2. Brucella abortus", "3. Brucella anthracis", "4. Diplococcus pneumoniae",
        "5. Escherichia coli", "6. Klebsiella pneumoniae", "7. Mycobacterium tuberculosis", "8. Proteus vulgaris",
        "9. Pseudomonas aeruginosa", "10. Salmonella typhosa", "11. Salmonella schottmuelleri",
        "12. Staphylococcus albus", "13. Staphylococcus aureus", "14. Streptococcus fecalis", "15. Streptococcus hemolyticus",
        "16. Streptococcus viridans"],
        y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
        type: 'bar',
        name: "Penicilin",
        marker: {
            color: "rgb(230, 5, 43)",
            line: {
                color: "rgb(8, 48, 107)",
                width: 1.5
            },
            opacity: 0.7
        }
    };

    var barA2 = {
        x: ["1. Aerobacter aerogenes", "2. Brucella abortus", "3. Brucella anthracis", "4. Diplococcus pneumoniae",
            "5. Escherichia coli", "6. Klebsiella pneumoniae", "7. Mycobacterium tuberculosis", "8. Proteus vulgaris",
            "9. Pseudomonas aeruginosa", "10. Salmonella typhosa", "11. Salmonella schottmuelleri",
            "12. Staphylococcus albus", "13. Staphylococcus aureus", "14. Streptococcus fecalis", "15. Streptococcus hemolyticus",
            "16. Streptococcus viridans"],
        y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
        type: 'bar',
        name: "Streptomycin",
        marker: {
            color: "rgb(242, 124, 5)",
            line: {
                color: "rgb(8, 48, 107)",
                width: 1.5
            },
            opacity: 0.7
        }
    };

    var barA3 = {
        x: ["1. Aerobacter aerogenes", "2. Brucella abortus", "3. Brucella anthracis", "4. Diplococcus pneumoniae",
            "5. Escherichia coli", "6. Klebsiella pneumoniae", "7. Mycobacterium tuberculosis", "8. Proteus vulgaris",
            "9. Pseudomonas aeruginosa", "10. Salmonella typhosa", "11. Salmonella schottmuelleri",
            "12. Staphylococcus albus", "13. Staphylococcus aureus", "14. Streptococcus fecalis", "15. Streptococcus hemolyticus",
            "16. Streptococcus viridans"],
        y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
        type: 'bar',
        name: "Neomycin",
        marker: {
            color: "rgb(242, 210, 5)",
            line: {
                color: "rgb(8, 48, 107)",
                width: 1.5
            },
            opacity: 0.7
        }
    };

    var dataA = [barA1, barA2, barA3];

    var layout1 = {
       title: "Effectiveness of different antibacterials",
        xaxis: {
            tickangle: 25
        },
        yaxis: {
            type: "log",
            title: "MCI"
        },
        barmode: 'group'
    };

    Plotly.newPlot("Chart1", dataA, layout1, {staticPlot: true})

    var dataB1 = {
        x: [1, 2, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8],
        y: [1.6, 0.02, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09],
        mode: "markers+text",
        name: "Negative Staining",
        text: ["1", "2", "5", "6", "7", "8", "9", "10", "11"],
        textposition: "top right",
        marker: {
            size: 15,
            color: "rgb(191, 11, 41)"
        }
    };

    var dataB2 = {
        x: [0.01, 11, 0.1, 0.03, 1, 14, 10],
        y: [0.007, 10, 0.001, 0.001, 0.1, 10, 40],
        mode: "markers+text",
        name: "Positive Staining",
        text: ["3", "4", "12", "13", "14", "15", "16"],
        textposition: "bottom left",
        marker: {
            size: 15,
            color: "rgb(11, 191, 59)"

        }
    };

    var dataB = [dataB1, dataB2];

    var layout2 = {
        yaxis: {
            type: "log",
            title: "Neomycin (MCI)"
        },
        xaxis: {
            type: "log",
            title: "Streptomycin (MCI)"
        },
        title: "Relation between Gram Staining and effectiveness"
    }

    Plotly.newPlot("Chart2", dataB, layout2, {staticPlot: true})

    var dataC = [{
        values: [40, 31, 29],
        labels: ["800+ MIC", "800 - 1 MIC", "< 1 MIC"],
        hole: .4,
        type: "pie"
    }];

    var layout3 = {
        title: "Penicilin effectiveness groupings",
    };

    Plotly.newPlot("Chart3", dataC, layout3, {staticPlot: true})

});