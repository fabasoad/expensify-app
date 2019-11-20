import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (e) => {
        this.props.startEditExpense(this.props.expense.id, e);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((e) => e.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, e) => dispatch(startEditExpense(id, e)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);